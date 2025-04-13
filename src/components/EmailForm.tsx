"use client";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import SendIcon from "@/assets/icons/sendIcon";
import { useState } from "react";
import toast from "react-hot-toast";

const emailSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
});

type EmailFormValues = z.infer<typeof emailSchema>;

const EmailForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik<EmailFormValues>({
    initialValues: {
      email: "",
    },
    validationSchema: toFormikValidationSchema(emailSchema),
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Email sent to:", values.email);
        toast.success("Thank you for subscribing!");
        resetForm();
      } catch (error) {
        console.error("Error:", error);
        toast.error("Failed to subscribe. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-5 mt-3 flex w-full">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          disabled={isLoading}
          className={`right-0 flex-1 bg-white px-2 py-1 outline-none disabled:bg-gray-100 ${
            formik.touched.email && formik.errors.email ? "border-red-500" : ""
          }`}
        />
        <button
          type="submit"
          disabled={isLoading || formik.isSubmitting}
          className="flex cursor-pointer items-center justify-center bg-[#0D4269] p-2.5 disabled:opacity-50"
        >
          {isLoading ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <SendIcon />
          )}
        </button>
      </div>
      {formik.touched.email && formik.errors.email && (
        <div className="mb-4 mt-[-1rem] text-xs text-red-500">
          {formik.errors.email}
        </div>
      )}
    </form>
  );
};

export default EmailForm;
