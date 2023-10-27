import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "./ui/button"


export const Banner = () => {
    return(
        <div className="w-full hidden sm:flex bg-rose-500 dark:bg-rose-600 text-center text-sm p-3 text-white  items-center gap-x-2 justify-center">
            <Button variant="ghost" className=" bg-transparent cursor-pointer hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal">
                <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" className=" bg-transparent cursor-pointer hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal">
                <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" className=" bg-transparent cursor-pointer hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal">
                <Mail className="w-6 h-6" />
            </Button>
            <Button variant="ghost" className=" bg-transparent cursor-pointer hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal">
                <Phone className="w-6 h-6" />
            </Button>
            


            
        </div>
    )
}