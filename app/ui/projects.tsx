import ProjectCard from "./project-card";

export default function Projects() {
  const projects = [
    {
      name: "NFT Fusion",
      description:
        "Developed a Web3 marketplace for minting and trading NFTs with MetaMask login, IPFS storage, and USDT-based auctions using React, Tailwind, Node.js, and Solidity",
      imagelink: "/nftfusion.png",
    },
    {
      name: "Talentbase AI",
      description:
        "Built the frontend for Talentbase.AI, a learning platform empowering students aged 12–18 in Pakistan with accessible, skill-based education using an AI-powered interface.",
      imagelink: "/talentbase.png",
    },
    {
      name: "E-Wallet",
      description:
        "Built a wallet-based web platform using .NET, Blazor, and SSMS, where users could earn profits through tasks and investments in a secure and interactive interface",
      imagelink: "/ewallet.png",
    },
    {
      name: "92Urdu",
      description:
        "Helped develop an Urdu poetry website for Pakistani audiences using .NET, Blazor, and SSMS — inspired by Rekhta.com but with a more modern, user-friendly UI.",
      imagelink: "/92urdu.png",
    },
    {
      name: "Omega salon",
      description:
        "Helped develop a salon management app using .NET, Blazor, and SSMS to let salon chains manage all branches online, while allowing customers to browse profiles, read reviews, find nearby salons, and book reservations.",
      imagelink: "/salon.png",
    },
    {
      name: "Todo List",
      description:
        "Created a to-do list app (LOL) using HTML, CSS, and vanilla JavaScript — lets users add, edit, delete, group tasks, and even drag and drop them between groups just for fun.",
      imagelink: "/todolist.png",
    },
    {
      name: "Pocket Calculator",
      description:
        "Built a calculator using HTML, CSS, and vanilla JavaScript that solves complex equations using recursion",
      imagelink: "/calculator.png",
    },
  ];
  return (
    <div>
      <p className="font-bold text-4xl mt-4 mb-10">Checkout my projects :)</p>
      <div className="flex flex-wrap justify-center gap-16 w-full">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
