const MiniNav = ({ handleMiniNav }: any) => {
  return (
    <label
      htmlFor="mini_nav"
      className="relative mb-4 flex cursor-pointer items-center pl-1"
    >
      <input
        onClick={handleMiniNav}
        type="checkbox"
        id="mini_nav"
        className="sr-only cursor-pointer pl-1"
      />
      <div className="toggle_bg h-5 w-8 cursor-pointer rounded-full border-2 border-gray-200 bg-transparent"></div>
      <span className="ml-3 cursor-pointer text-sm font-medium">mini-nav</span>
    </label>
  )
}

export default MiniNav
