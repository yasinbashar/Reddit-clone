import Image from "next/image";

const communities = [
  {
    name: "r/DestinyTheGame",
    members: "3,278,787 members",
    icon: "/destiny-icon.jpg", // replace with actual image path or use online image URLs
  },
  {
    name: "r/anime",
    members: "11,929,225 members",
    icon: "/destiny-icon.jpg", // replace with actual image path or use online image URLs
  },
  {
    name: "r/destiny2",
    members: "912,444 members",
    icon: "/destiny-icon.jpg", // replace with actual image path or use online image URLs
  },
  {
    name: "r/FortNiteBR",
    members: "5,366,374 members",
    icon: "/destiny-icon.jpg", // replace with actual image path or use online image URLs
  },
  {
    name: "r/dndnext",
    members: "786,386 members",
    icon: "/destiny-icon.jpg", // replace with actual image path or use online image URLs
  },
];

export default function PopularCommunities() {
  return (
    <div className="w-[360px] bg-white top-12 p-4 shadow-md rounded-lg md:block hidden fixed right-0">
      <h2 className="text-slate-600 mb-4">Popular Communities</h2>
      <ul>
        {communities.map((community, index) => (
          <li key={index} className="flex items-center mb-4">
            <div className="w-10 h-10">
              <Image
                src={community.icon}
                alt={`${community.name} icon`}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="ml-4">
              <p className="font-medium">{community.name}</p>
              <p className="text-sm text-gray-500">{community.members}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="hover:bg-gray-300 font-semibold rounded-full p-2">See more</button>
    </div>
  );
}
