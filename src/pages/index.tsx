import Introduction from "../components/atoms/Introduction";
import About from "../components/atoms/About";

export default function Home() {
    if(typeof window != 'undefined'){
        const targets = document.querySelectorAll(".js-show-on-scroll");

        const callback = function(entries){
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add("motion-safe:animate-fadeIn");
                else entry.target.classList.remove("motion-safe:animate-fadeIn");
            });
        }

        const observer = new IntersectionObserver(callback);

        targets.forEach(function(target){
            target.classList.add("opacity-0")

            observer.observe(target);
        });
    }


  return (
      <div className={"child:md:py-[65%] child:py-20 child:sm:pl-0 child:pl-8" }>
        <Introduction/>
        <About/>
      </div>

  )
}
