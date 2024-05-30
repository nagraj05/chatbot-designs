import TextField from '@mui/material/TextField';


export default function EmptyState() {
  return (
    <div
      className="
        px-4
        py-10
        sm:px-6
        lg:px-8
        h-full
        flex
        flex-col
        justify-between
        items-center
        bg-gray-300
        "
    >
      <div className="text-center items-center flex flex-col w-full">
        <h3
          className="
            mt-2
            text-2xl
            font-semibold
            text-gray-900
            
            "
        >
          Start a new conversation
        </h3>
       
      </div>
      <TextField id="outlined-basic" label="" variant="outlined" className='w-full  bg-white  '/>
    </div>
  )
}
