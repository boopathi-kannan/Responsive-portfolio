export const Profile =()=> {
  return (
     <>
     <div className="bg-slate-50 h-screen">
  <div className="flex flex-col-reverse md:flex-row w-full h-full pt-10">
    <div className="flex flex-col p-5 md:p-10 w-full md:w-1/2">
      <div className="p-4 md:p-8">
        <h1 className="text-black font-bold text-3xl md:text-4xl pl-2 pb-3">
          Hi, I am <span className="text-slate-500">Boopathi...</span>
        </h1>
        <h2 className="font-bold text-2xl md:text-4xl pl-2 text-slate-500 pb-3">
          Software Developer
        </h2>
      </div>
      <div className="p-4 md:p-8">
        <p className="text-black text-sm md:text-lg leading-relaxed">
          <span className="block md:inline">
            Passionate and results-driven Full Stack Developer with a strong
            foundation in both front-end and back-end technologies,
          </span>
          including JavaScript, React, Node.js, and databases like MongoDB and
          SQL. Seeking to leverage my skills in designing, developing, and
          deploying web applications in a dynamic and innovative software
          development environment.
        </p>
      </div>
    </div>


    <div className="flex justify-center md:justify-end w-full md:w-1/2 p-5 pr-16">
      <img
        src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726823398/8a354036-b0ac-49ab-9ca4-4204531d7079_ycb06y.jpg"
        className="rounded-full h-40 w-40 md:h-80 md:w-80 object-cover"
        alt="Profile"
      />
    </div>
  </div>
  <div className="flex flex-wrap justify-center text-center p-5 md:p-10 gap-4 md:gap-7">
    <img
      src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726569019/atom_wcytoz.png"
      className="h-8 w-8 md:h-10 md:w-10"
      alt="React"
    />
    <img
      src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726568558/developer_g80rja.png"
      className="h-8 w-8 md:h-10 md:w-10"
      alt="Developer"
    />
    <img
      src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726739795/html_a6djri.png"
      className="h-8 w-8 md:h-10 md:w-10"
      alt="HTML"
    />
    <img
      src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726739926/cascading-style-sheets_m3eb94.png"
      className="h-8 w-8 md:h-10 md:w-10"
      alt="CSS"
    />
    <img
      src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726740319/java_xxqlqe.png"
      className="h-8 w-8 md:h-10 md:w-10"
      alt="Java"
    />
    <img
      src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726741241/python_tdjbi6.png"
      className="h-8 w-8 md:h-10 md:w-10"
      alt="Python"
    />
    <img
      src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726742577/sql-server_l3olh9.png"
      className="h-8 w-8 md:h-10 md:w-10"
      alt="SQL"
    />
  </div>
</div>

     </>
  )
}


export default Profile