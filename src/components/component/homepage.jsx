import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaCss3, FaGitAlt, FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { RiFirebaseLine } from "react-icons/ri";

export function Homepage() {
  
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 bg-white/80 px-4 py-3 backdrop-blur-sm dark:bg-gray-900/80">
      <div className="container mx-auto flex items-center justify-between">
  <Link
    className="text-2xl font-bold text-gray-900 dark:text-gray-50"
    href="#"
  >
    Parampreet Singh
  </Link>
  <nav className="flex items-center space-x-4">
    <Link
      className="text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
      href="#about"
    >
      About
    </Link>
    <Link
      className="text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
      href="#skills"
    >
      Skills
    </Link>
    <Link
      className="text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
      href="#projects"
    >
      Projects
    </Link>
    <Link
      className="text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
      href="#contact"
    >
      Contact
    </Link>
  </nav>
</div>

      </header>
      <section className="flex-1 bg-gray-100 py-24 dark:bg-gray-900">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
            Parampreet Singh
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            I'm a passionate web developer with a strong background in building
            modern, responsive, and user-friendly web applications.
          </p>
          <div className="flex space-x-4">
            <Link
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
              href="#about"
            >
              About Me
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-md border border-gray-200 border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300 dark:border-gray-800"
              href="#projects"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
      <section id="about" className="bg-white py-24 dark:bg-gray-900">
  <div className="container mx-auto flex items-center justify-center px-4">
    <div className="w-full max-w-2xl space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 text-center">
        About Me
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        I'm a web developer with over 2 years of experience in building
        modern, responsive, and user-friendly web applications. I have a
        strong background in JavaScript, React, and various web
        development frameworks and tools. I'm passionate about creating
        high-quality, scalable, and maintainable code that delivers an
        exceptional user experience.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        In my free time, I enjoy exploring new technologies, contributing
        to open-source projects, and staying up-to-date with the latest
        industry trends. I'm always eager to learn and grow, and I'm
        excited to collaborate with like-minded individuals to create
        innovative solutions.
      </p>
    </div>
  </div>
</section>

      <section id="skills" className="bg-gray-100 py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-50">
            My Skills
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center space-y-4">
              <FaReact />

              <span className="text-lg font-medium text-gray-900 dark:text-gray-50">
                React
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <IoLogoJavascript />
              <span className="text-lg font-medium text-gray-900 dark:text-gray-50">
                JavaScript
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <FaNodeJs />
              <span className="text-lg font-medium text-gray-900 dark:text-gray-50">
                Node.js
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <FaCss3 />
              <span className="text-lg font-medium text-gray-900 dark:text-gray-50">
                CSS
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <FaGitAlt />

              <span className="text-lg font-medium text-gray-900 dark:text-gray-50">
                Git
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <GrGraphQl className="w-15 h-15" />
              <span className="text-lg font-medium text-gray-900 dark:text-gray-50">
                GraphQl
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <SiTypescript />

              <span className="text-lg font-medium text-gray-900 dark:text-gray-50">
                TypeScript
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <SiNextdotjs />

              <span className="text-lg font-medium text-gray-900 dark:text-gray-50">
                Next.js
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <FaJava />
              <span className="text-lg font-medium text-gray-900 dark:text-gray-50">
                Java
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <DiMongodb />
              <span className="text-lg font-medium text-gray-900 dark:text-gray-50">
                MongoDB
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <FaSass />
              <span className="text-lg font-medium text-gray-900 dark:text-gray-50">
                Sass
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <RiFirebaseLine />
              <span className="text-lg font-medium text-gray-900 dark:text-gray-50">
                Firebase
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="bg-white py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-50">
            My Projects
          </h2>
          <div className=" items-center grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                alt="Project 1"
                className="h-48 w-full object-cover"
                height={400}
                src="audioscriptimg.jpg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
              <div className="bg-white p-6 dark:bg-gray-800">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-50">
                  Audio-Script
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                Record, translate, transcribe, and download your spoken words with ease.
                </p>
                <div className="flex justify-end">
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                    href="https://www.github.com/ambitiousparam/audio-script"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                alt="Project 1"
                className="h-48 w-full object-cover"
                height={400}
                src="quickread.jpg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                  
                }}
                width={600}
              />
              <div className="bg-white p-6 dark:bg-gray-800">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-50">
                  Quick-read
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                Harnessing the power of AI summarization to distill lengthy articles into concise insights.
                </p>
                <div className="flex justify-end">
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                    href="https://www.github.com/ambitiousparam/quickread"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                alt="Project 2"
                className="h-48 w-full object-cover"
                height={400}
                src="blogsite.jpg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
              <div className="bg-white p-6 dark:bg-gray-800">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-50">
                  Blog-website
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                Empowering voices via dynamic Mern and GraphQL-powered blogging platform.
                </p>
                <div className="flex justify-end">
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                    href="https://www.github.com/ambitiousparam/blogging-website"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                alt="Portfolioimg"
                className="h-48 w-full object-cover" 
                height={400}
                src="portfolioimg.jpg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                  
                }}
                width={600}
              />
              <div className="bg-white p-6 dark:bg-gray-800">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-50">
                  Portfolio
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                Next.js powered portfolio showcasing elegant design and seamless user experience.
                </p>
                <div className="flex justify-end">
                  <Link
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                    href="#"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section id="contact" className="bg-gray-100 py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-50">
            Contact Me
          </h2>
          <div className="mx-auto max-w-md">
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required type="text" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Your email"
                  required
                  type="email"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  required
                  rows={5}
                />
              </div>
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p>© Param. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
