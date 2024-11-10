import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from "lucide-react";

export default function Projects() {
    return (
        <>    
      
<div  style={{display:'flex',justifyContent:'justify-between',gap:'400px',marginLeft:'80px'}}>
        <h1 className="name-effect" 
         style={{color:'#3939e8',fontWeight:'bold',fontSize:'40px',position:'relative',zIndex:1}}>SABIHA<span className="text-transparent"
        
              style={{
               
                  WebkitTextStroke: '2px black',
                  fontFamily:'franklin-gothic-urw, sans-serif',
              
              
              }}>SULTANA</span></h1>
              <ul 
         
              style={{display:'flex',justifyContent:'justify-between',gap:'40px',color:'black',fontWeight:'bold',fontSize:'20px',
                marginTop:'13px',
              }}>
                  <li ><Link href="/"  >Home</Link></li>
              <li> <Link href="/about" >About</Link></li>
              <li><Link href="/contact">Contact</Link></li> 
              <li><Link href="projects" >Projects</Link></li>
            </ul>
              
              
              <Sheet>
  <SheetTrigger style={{display:'block'}}><Menu  style={{marginTop:'10px',
    color:'white',
  }}/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle> <ul  style={{
    fontSize: '20px',marginTop:'50px'}}>
                  <li ><Link href="/"  >Home</Link></li>
              <li> <Link href="/about" >About</Link></li>
              <li><Link href="/contact">Contact</Link></li> 
              <li><Link href="projects" >Projects</Link></li>
        </ul></SheetTitle>
      <SheetDescription>
      Feel free to explore my portfolio, and let's discuss how I can help bring your digital vision to life.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
              </div>
              <div className="">
              <div 
              style={{height:'6px',width:'100%',position:'absolute',top:'65px',backgroundImage:'linear-gradient(to right, #4545b0, #5d81f5'}}></div>

<div className="flex justify-around gap-[60px] bg-gradient-to-b from-[#26085d] to-[#031b68]
  text-white w-[1200px] ml-[150px] mt-[150px] rounded-[10px] h-[200px]" style={{display:'flex',justifyContent:'justify-around',gap:'60px',
  background: 'linear-gradient(to right,#26085d, #031b68',
  borderRadius: '10px',
  height: '200px',
  width: '1200px',
  marginLeft: '150px',
  marginTop: '150px',

  }}>
              <h3  style={{
                color:'white',fontSize:'50px',fontWeight:'bold',marginTop:'40px',marginLeft:'0px'}}>Take a Look <br /> At My Projects</h3>
              <p 
              style={{color:'white',fontSize:'18px',marginTop:'60px',marginRight:'200px',width:'500px'}}>I'm good at what we do. I've got years of experience designing that convert visitors into customers.
                 Want proof? Check out some examples of my work below!</p>
                 <div className="flow"></div>
                 </div>
              <div className="projectsDiv " style={{display:'flex',justifyContent:'justify-center',gap:'10px',marginTop:'80px',marginLeft:'160px'}}>
                <div className="p1"></div>
                <div className="p2"></div>
             
              </div>
              <div className="projectsDiv " style={{display:'flex',justifyContent:'justify-center',gap:'10px',marginTop:'30px',marginLeft:'160px'}}>
                <div className="p3"></div>
                <div className="p4"></div>
             
              </div>
              <div className="projectsDiv" style={{display:'flex',justifyContent:'justify-center',gap:'10px',marginTop:'30px',marginLeft:'160px'}}>
                <div className="p5"></div>
                <div className="p6"></div>
             
              </div>
              </div>
          
              </>
    )
}