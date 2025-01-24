/* eslint-disable @typescript-eslint/no-explicit-any */
import loginValidationSchema from "@/validationSchema/loginValidationSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useLogInMutation } from "@/redux/api/authApi/authApi";
import tokenVerification from "@/utils/tokenVerification";
import { useAppDispatch } from "@/redux/hook";
import { useLocation, useNavigate } from "react-router-dom";
import { setUser } from "@/redux/features/authSlice/authSlice";
import { toast } from "react-toastify";

const Login = () => {
    const [userLoginInfo, { isLoading }] = useLogInMutation();
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();


    const form = useForm<z.infer<typeof loginValidationSchema>>({
        resolver: zodResolver(loginValidationSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof loginValidationSchema>) => {
        if (isLoading) {
            return (
                <>
                    <div className="flex items-center justify-center">
                        <p className="ftext-5xl font-bold">Loading...</p>
                    </div>
                </>
            )
        }
        try {
            const res: any = await userLoginInfo(values);

            if (res?.data?.success) {
                const token = res?.data?.token;
                const user = tokenVerification(token);
                dispatch(setUser({ user, token }));
                navigate(location?.state ? location.state : '/', { replace: true });
                toast.success(res?.data?.message);
            }
            if (res.error) {
                toast.error(res?.error?.message || res?.error?.data?.message);
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    }

    return (
        <div>
            <div>
                <p className="my-3 text-4xl font-bold text-center">Login and Book Rooms</p>
                <div className="flex justify-center">
                    <div className="w-96 text-center rounded-md h-[5px] bg-purple-400"></div>
                </div>
            </div>
            <div className="w-3/5 my-10 mx-auto flex justify-between items-center  gap-10 bg-purple-200 px-6 py-6 rounded-md">
                <div className="hidden md:hidden lg:block w-3/5 ">
                    <img src="https://i.ibb.co.com/p26Mxc9/Login-pic.jpg" alt="" />
                </div>
                <div className="w-full md:full lg:w-1/2">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Email" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Type your Email Address.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Your Password" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Type Your Password.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="text-center bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Login</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;