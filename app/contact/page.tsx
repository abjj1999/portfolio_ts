"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Contact, Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="">
      <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white flex items-center justify-center">
            Contact Me
            <Contact className="w-8 h-8 inline-block ml-2" />
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            I'm always open to discussing product design work or partnership
            opportunities. If you have a project that you want to get started,
            think you need my help with something or just fancy saying hey, then
            get in touch.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <Input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light font-mono"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <Input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light font-mono"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 font-mono "
                placeholder="Leave a comment..."
                defaultValue={""}
              />
            </div>
            <Button
              type="submit"
              variant="destructive"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg dark:bg-rose-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none "
            >
              Send message
            </Button>
          </form>
        </div>
      </section>
      
      <p className="mb-8 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl mt-4">
            Or reach out to me on social media
          </p>
        <div className="flex justify-center ">
        <Button
            variant="ghost"
            className=" bg-transparent cursor-pointer hover:bg-primary/5 text-black  dark:text-white p-1 px-2 h-auto font-normal"
          >
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            className=" bg-transparent cursor-pointer hover:bg-primary/5 text-black  dark:text-white p-1 px-2 h-auto font-normal"
          >
            <Github className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            className=" bg-transparent cursor-pointer hover:bg-primary/5 text-black  dark:text-white p-1 px-2 h-auto font-normal"
          >
            <Mail className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            className=" bg-transparent cursor-pointer hover:bg-primary/5 text-black  dark:text-white p-1 px-2 h-auto font-normal"
          >
            <Phone className="w-6 h-6" />
          </Button>
        </div>
    </div>
  );
};

export default ContactPage;
