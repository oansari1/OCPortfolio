import chefClaudeLogo from "./images/chef-claude-icon.png"

export default function Header() {
    return (
        <div className="flex items-center justify-center gap-3 h-20 bg-white shadow-md">
            <img src={chefClaudeLogo} className="w-12" />
            <h1 className="font-normal">Chef Claude</h1>
        </div>
    )
}
