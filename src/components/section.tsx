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

export default function Section() {
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
        <h1 className="name-effect  
 " style={{position:'relative',zIndex:1,
          fontWeight:'bold',fontSize:'40px',
         }}>
          SABIHA<span 
        
              style={{
               
                  WebkitTextStroke: '2px black',
                  fontFamily:'franklin-gothic-urw, sans-serif',
                  color: 'transparent',
              
              
              }}>SULTANA</span></h1>
              <ul 
              
              
              
              style={{display:'flex',
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
          </ul>
              
              
              <Sheet>
  <SheetTrigger 
style={{display:'block'}}>
    <Menu  style={{marginTop:'5px',
      color:'white'
    }}/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle> <ul style={{fontSize:'20px',
        marginTop:'50px',
      }}>
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
              <div  style={{
                height:'6px',
                background:'linear-gradient(to right, #4545b0, #5d81f5)',
                width:'100%',
                position:'absolute',
                top:'65px'
              }}>
            
              </div>
        <div  style={{fontFamily:'franklin-gothic-urw, sans-serif',display:'flex',marginLeft:'0px'}}>
            <div className="tailored " style={{marginTop:'40px',textAlign:'center',fontSize:'25px',marginLeft:'400px'}}>
            <h4  style={{fontWeight:'bold',color:'#3939e8',marginBottom:'20px'}} >WHO I AM</h4>
            <h1 
            style={{
              fontWeight:'bold',
              color:'rgb(31 41 55 )',width:'680px',fontSize:'40px',lineHeight:'60px',}}
            
            
            >Web Development and Design Tailored To Your Specifications</h1>
            <p 
            
            
            style={{ color:'rgb(31 41 55 )',fontSize:'18px',fontWeight:'bold', width:'680px',marginTop:'20px'}}
            >
               Hi, I'm Sabiha Sultana, I specialize in building responsive, intuitive, and visually stunning web applications using modern technologies. I am committed to
                assisting businesses in expanding through unique web design and development strategies using cutting-edge web development 
                technology. Feel free to explore my portfolio, and let's discuss how I can help bring your digital vision to life.


          
              
            </p>
          
            </div>
            {/* <div className="timg"></div> */}
        </div>
        <aside 
          
          
         style={{backgroundImage:'linear-gradient(to bottom, #26085d, #031b68)',  width:'1200px',height:'300px',
          color:'white',
          borderRadius:'10px',
          position:'absolute',
          marginTop:'50px',
          marginLeft:'150px',
         }} 
          >
        <h1  style={{fontSize: '30px',
marginLeft: '10px',
marginTop: '12px',
fontWeight: 'bold',




        }}>Proficiencies</h1>

          <div style={{display:'flex'}}>
         
              <ul className="item">Programming Languages
              
                <li className="js"></li>
                <li className="mt-3 java">JavaScript</li>
                <li className="ts"></li>
                <li className="type" style={{marginLeft:'50px',marginTop:'20px'}} >TypeScript</li>
                <li className="html"></li>
                <li className="ht" style={{marginLeft:'50px',marginTop:'20px'}}>HTML5</li>
              </ul>

              <ul className="item">Frameworks
                <li className="nextjs "></li>
                <li className="mt-3 next "style={{marginLeft:'50px',marginTop:'20px'}}>Next.js</li>
                <li className="react"></li>
                <li className="re" style={{marginLeft:'50px',marginTop:'20px'}}>React</li>
                <li className="node"></li>
                <li className="no" style={{marginLeft:'50px',marginTop:'20px'}}>Node.js</li>
               </ul>
             
               
                
          
              <ul className="item">Styling
              <li className="css"></li>
                <li className="mt-3 cs" style={{marginLeft:'50px',marginTop:'20px'}}>CSS3</li>
                <li className="tail"></li>
                <li className="t" style={{marginLeft:'50px',marginTop:'20px'}}>Tailwind</li>
                <li className="shad"></li>
                <li className="sh"  style={{marginLeft:'50px',marginTop:'20px'}}>Shadcn</li>
             
             
              </ul >
              <ul className="item" >Tools & Software
              <li className="git"></li>
                <li className="mt-3 vcg" style={{marginLeft:'50px',marginTop:'20px'}}> Version Control Git</li>
                <li className="vs"></li>
                <li className="code" style={{marginLeft:'50px',marginTop:'20px'}}>Visual Studio Code</li>
                <li className="res"></li>
             <li className="r" style={{marginLeft:'50px',marginTop:'20px'}}> Responsive Website</li>
          
             
              </ul>
          </div>
          <div className="bulb"></div>
        </aside>
        </>
    );
}
