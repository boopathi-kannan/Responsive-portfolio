import Slice from "../components/Slice";

export const Project=()=> {
 
  return (
    <>
     <section className="w-screen flex flex-col justify-between gap-2 pb-[20rem] bg-slate-100">
     <h1 className="pt-20 pl-20 text-2xl font-bold">Projects</h1>
  <div className="px-4 sm:px-8 md:px-[2.5rem]">
    <div className="about-cards flex flex-col gap-10 p-10 sm:p-16 md:p-20 md:pt-40 md:flex-row">
     
      <Slice />
    </div>

  </div>
</section>

    </>
   
  )
}

export default Project