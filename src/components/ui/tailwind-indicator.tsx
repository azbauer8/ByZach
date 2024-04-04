export default function TailwindIndicator() {
  const env = process.env.NODE_ENV
  if (env !== "development") {
    return null
  }
  return (
    <div className="fixed bottom-0 right-0 m-8 flex size-8 items-center justify-center rounded-full bg-gray-700">
      <div className="block  sm:hidden md:hidden lg:hidden xl:hidden"></div>
      <div className="hidden sm:block  md:hidden lg:hidden xl:hidden">SM</div>
      <div className="hidden sm:hidden md:block  lg:hidden xl:hidden">MD</div>
      <div className="hidden sm:hidden md:hidden lg:block  xl:hidden">LG</div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
        XL
      </div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
        2XL
      </div>
    </div>
  )
}
