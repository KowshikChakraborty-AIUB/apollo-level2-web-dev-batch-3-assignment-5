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
            <div className="w-1/2 mx-auto">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
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
                                        <Input type="password" placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default Login;