import NavLinks from "./NavLinks"

export default function Header() {
  return (
    <header className='z-50 relative container mx-auto'>
      <div className=' flex items-center justify-between fixed top-6 container bg-red-300 opacity-80 rounded-full px-4 py-2'>
        <h1 className=' text-4xl font-medium'>NickOD.xyz</h1>
        <NavLinks />
      </div>
    </header>
  )
}
