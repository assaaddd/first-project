import {useSelector} from 'react-redux';

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user);
  return (
    <div className='p-3 max-w-lg  mx-auto'>
      <h1 className='text-center font-semibold my-7 text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} alt="" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' name="" id="username" />
        <input type="email" placeholder='email' className='border p-3 rounded-lg' name="" id="email" />
        <input type="password" placeholder='password' className='border p-3 rounded-lg' name="" id="password" />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='cursor-pointer text-red-700'> Delete Account</span>
        <span className='cursor-pointer text-red-700'> sign out</span>
      </div>
    </div>
  )
}
