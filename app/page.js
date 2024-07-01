import Image from "next/image";
import PartyStats from "./ui/partystats";
import BiomeButton from "./ui/biomebutton";

const exparty = [
  {
    class: 'Fighter',
    level: 5,
    hp: 50,
    ac: 18,
    strength: 16,
    dexterity: 12,
    constitution: 14,
    intelligence: 10,
    wisdom: 12,
    charisma: 8,
  },
  {
    class: 'Wizard',
    level: 5,
    hp: 30,
    ac: 15,
    strength: 8,
    dexterity: 14,
    constitution: 12,
    intelligence: 18,
    wisdom: 12,
    charisma: 10,
  },
  // Add more party members here
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2 gap-6 w-full mb-2 mt-2 mr-6 ml-6">
        <div className="mb-4">
          <h2 className="text-white font-bold text-2xl mb-4">Add your Party</h2>
          <button className="text-white border rounded bg-green-800 font-bold py-2 px-4 mr-5 mb-4">Add</button>
          <button className="text-white border rounded bg-red-800 font-bold py-2 px-4 mb-4">Delete</button>
          <PartyStats 
          party={exparty}/>
        </div>
        <div>
          <h2 className="text-white font-bold text-2xl mb-4">Select the location of the dungeon</h2>
          <div className="table-row">
            <div className="table-cell">
              <BiomeButton 
              imageSrc={"/image/forest.jpg"}/>
            </div>
            <div className="table-cell">
              <BiomeButton 
              imageSrc={"/image/island.jpg"}/>
            </div>
            <div className="table-cell">
              <BiomeButton 
              imageSrc={"/image/plains.jpg"}/>
            </div>
            <div className="table-cell">
              <BiomeButton 
              imageSrc={"/image/mountain.jpg"}/>
            </div>
            <div className="table-cell">
              <BiomeButton 
              imageSrc={"/image/swamp.jpg"}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
