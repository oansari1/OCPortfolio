import chefClaudeLogo from "./images/chef-claude-icon.png"

export default function Header() {
    return (
        <div className="flex items-center justify-center gap-2 sm:gap-3 h-14 sm:h-20 bg-white shadow-md">
            <img src={chefClaudeLogo} className="w-8 sm:w-12" />
            <h1 className="font-normal text-lg sm:text-2xl">Chef Claude</h1>
        </div>
    )
}
