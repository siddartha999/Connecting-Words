import './App.css'

const App = () => {
  return (
    <div id="main" className='bg-black h-[inherit] text-white'>
      <div id="title" className='text-center pt-10'>
        <p className='lg:text-3xl sm:text-xl '>Connecting Words</p>
      </div>
      <div id="outline" className='text-center flex flex-wrap gap-12 pt-12 justify-center'>
         <div className='w-[25rem] h-[25rem] cursor-pointer rounded-xl bg-sky-600 hover:bg-sky-700'>
           <p className='text-2xl pt-[10rem]'>Write</p>
         </div>
         <div className='w-[25rem] h-[25rem] cursor-pointer rounded-xl bg-indigo-600 hover:bg-indigo-700'>
           <p className='text-2xl pt-[10rem]'>Read</p>
         </div>
      </div>
    </div>
  )
}

export default App;
