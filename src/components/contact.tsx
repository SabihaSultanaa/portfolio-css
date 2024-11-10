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

export default function Contact() {
    return (
        <>    
      {/* xxs:bg-red-500 xs:bg-yellow-500
 sm:bg-green-500 md:bg-blue-500 lg:bg-purple-500 xl:bg-orange-400
  2xl:bg-red-300 max-w-screen-2xl  */}
<div style={{
               display: 'flex',
               gap: '400px',
               justifyContent:'justify-between ',
               marginLeft:'80px'
             
            
           
           
           }}>
        <h1 className="name-effect"  
       
style={{position:'relative',zIndex:1,
          fontWeight:'bold',fontSize:'40px',
         }}
         >SABIHA<span
        
              style={{
               
                  WebkitTextStroke: '2px black',
                  fontFamily:'franklin-gothic-urw, sans-serif',
                  color:'transparent',
              
              
              }}>SULTANA</span></h1>
              <ul  style={{display:'flex',
               gap: '50px',
            color:'black',
            fontSize:'20px',
        marginTop:'20px',
            fontWeight:'bold',
               marginRight:'80px'
             
            
           
           
           }}
              >
                  <li ><Link href="/"  >Home</Link></li>
              <li> <Link href="/about" >About</Link></li>
              <li><Link href="/contact">Contact</Link></li> 
              <li><Link href="projects" >Projects</Link></li>
              <li className="watsapp" ><Link href="  https://wa.me/+923482381740  target= _blank rel=noopener noreferrer"  ></Link></li>
              <li className="linkedin"><Link href="https://www.linkedin.com/in/sabiha-sultana-52abaa222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app target= _blank rel=noopener noreferrer"  ></Link></li>
              <li className="github" ><Link href="https://github.com/SabihaSultanaa target= _blank rel=noopener noreferrer" ></Link></li>
              </ul>
            
              
              <Sheet>
  <SheetTrigger style={{display:'block'}}><Menu style={{marginTop:'5px',
      color:'white'
    }} /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle> <ul  style={{fontSize:'20px',
        marginTop:'50px',
      }}>
                  <li ><Link href="/"  >Home</Link></li>
              <li> <Link href="/about" >About</Link></li>
              <li><Link href="/contact">Contact</Link></li> 
              <li><Link href="projects" >Projects</Link></li>
              <li className="watsapp" ><Link href="https://wa.me/+923482381740  " ><a href="target= _blank rel=noopener noreferrer"></a></Link></li>
              <li className="linkedin"><Link href="https://www.linkedin.com/in/sabiha-sultana-52abaa222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app target= _blank rel=noopener noreferrer"  ></Link></li>
              <li className="github" ><Link href="https://github.com/SabihaSultanaa target= _blank rel=noopener noreferrer" ></Link></li></ul></SheetTitle>
      <SheetDescription>
      Feel free to explore my portfolio, and let's discuss how I can help bring your digital vision to life.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
              </div>
              <div 
              style={{height:'6px',width:'100%',position:'absolute',top:'65px', background:'linear-gradient(to right, #4545b0, #5d81f5'}}></div>
              <div className="contact " style={{display:'flex',gap:'100px'}}>
              <div className="contact-text" style={{marginLeft:'150px',marginTop:'70px'}}>
          <h3 style={{fontSize:'30px',fontWeight:'bold',color:'#3939e8'}}>Contact Now</h3>
      <h2 className="text-[40px] font-bold" style={{fontSize:'40px',fontWeight:'bold'}} > Have Question? <br /> Write a Message</h2>

    <input type="text" name="" placeholder="Full Name" className="contact-input" style={{width:'500px',height:'50px',paddingLeft:'10px',fontSize:'20px',marginTop:'20px',border:'2px solid black',color:'black'}}/> <br /> 
   

    <input type="text" name="" placeholder="Email Address"
     className="contact-input 
    "
      style={{width:'500px',height:'50px',paddingLeft:'10px',fontSize:'20px',marginTop:'15px',border:'2px solid black',color:'black'}}/> <br /> 
    <input type="text" name="" placeholder="Contact Number" className="contact-input"
     style={{width:'500px',height:'50px',paddingLeft:'10px',fontSize:'20px',marginTop:'15px',border:'2px solid black',color:'black'}}/> <br /> 
     <br />
    <textarea name="messgae" id="message" placeholder="Message" className="contact-input"
      style={{width:'500px',height:'100px',paddingLeft:'10px',fontSize:'20px',border:'2px solid black',color:'black'}}></textarea> <br />
<button className="bg-pink-600 text-white w-[500px] h-[50px] rounded-[30px] mt-[15px]  text-[20px] hover:bg-pink-700"
style={{width:'500px',height:'50px',fontSize:'20px',color:'white',borderRadius:'30px',marginTop:'15px',}}>Submit</button>
            </div>
          
        <div className="contact-img "></div>
            </div>
              </>
    )
}