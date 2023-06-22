"use client";
import { useForm, ValidationError } from "@formspree/react";
import { NextPageContext, NextComponentType } from "next";
import { motion } from "framer-motion";
interface ContactFormProps {}
const ContactForm: NextComponentType<
  NextPageContext,
  {},
  ContactFormProps
> = ({}) => {
  const [state, handleSubmit] = useForm("xyyarvvp");
  if (state.succeeded) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="flex justify-center items-center py-20"
      >
        <motion.svg
          fill="none"
          viewBox="0 0 28 28"
          strokeWidth={2}
          stroke="currentColor"
          className="h-28 w-28 text-blue-600"
        >
          <motion.path
            className="text-white"
            transition={{ delay: 0.1 }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            strokeLinecap="round"
            strokeLinejoin="round"
            offset={0.3}
            transform={"translate(3,4) scale(.9)"}
            d="M4.5 12.75l6 6 9-13.5"
          />
          <motion.circle
            cx="14"
            cy="14"
            fill="none"
            r="12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>
    );
  }
  if (state.submitting) {
    return (
      <div className="flex justify-center items-center py-20">
        <motion.svg
          className=" text-blue-600 h-28 w-28 "
          height="24"
          viewBox="0 0 50 50"
          width="24"
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", repeat: Infinity, duration: 4 }}
          style={{ originX: "center", originY: "center" }}
        >
          <circle
            className="text-blue-900 h-28 w-28"
            cx="25"
            cy="25"
            fill="none"
            r="20"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <motion.circle
            cx="25"
            cy="25"
            fill="none"
            r="20"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            animate={{
              strokeDasharray: ["1, 150", "90, 150", "90, 150"],
              strokeDashoffset: [0, -35, -125],
            }}
            transition={{ ease: "easeInOut", repeat: Infinity, duration: 2 }}
          />
        </motion.svg>
      </div>
    );
  }
  return (
    <form className="flex flex-col  space-y-4 " onSubmit={handleSubmit}>
      <input
        className="text-zinc-50 rounded p-5 focus:outline-none placeholder-zinc-300 bg-zinc-900"
        placeholder="Name"
        id="name"
        type="text"
        name="name"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input
        className="text-zinc-50 rounded  p-5 bg-zinc-900 placeholder-zinc-300 focus:outline-none"
        placeholder="Email"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        placeholder="Message"
        rows={7}
        className="text-zinc-50 rounded  p-5 bg-zinc-900 placeholder-zinc-300 focus:outline-none"
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="px-6 py-4 bg-blue-600 text-white font-medium rounded-lg"
        type="submit"
        disabled={state.submitting}
      >
        SEND
      </button>
    </form>
  );
};
export default ContactForm;
