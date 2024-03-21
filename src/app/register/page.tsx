"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { appConfig } from "@/utils/config";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { RegisterValidationSchema } from "./schemas/RegisterValidationSchema";
import FormInput from "@/components/forms/FormInput";

const Register: React.FC = () => {
  const router = useRouter();
  const { baseUrl } = appConfig;
  const { values, touched, errors, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: RegisterValidationSchema,
      onSubmit: async (values) => {
        const { data } = await axios.get(
          baseUrl + `/users?email=${values.email}`,
        );

        if (data.length) {
          return alert("email already exist");
        }

        await axios.post(baseUrl + "/users", {
          name: values.name,
          email: values.email,
          password: values.password,
          isVerify: false,
        });

        toast.success("register sucess");
        router.push("/login");
      },
    });

  return (
    <main className="container mx-auto mt-8 px-4">
      <div className="flex justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Sosmed</CardTitle>
          </CardHeader>
          <CardFooter>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* Name */}
                <FormInput
                  name="name"
                  error={errors.name}
                  isError={!!touched.name && !!errors.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Name"
                  type="name"
                  value={values.name}
                />

                {/* Email */}
                <FormInput
                  name="email"
                  error={errors.email}
                  isError={!!touched.email && !!errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Email"
                  type="email"
                  value={values.email}
                />

                {/* Password */}
                <FormInput
                  name="password"
                  error={errors.password}
                  isError={!!touched.password && !!errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                  value={values.password}
                />
              </div>
              <Button className="mt-6 w-full py-3">Register</Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Register;
