"use client"

const PartyStats = ({ party }) => {
    return (
      <div className="table-container text-white">
        <table className="table-fixed border border-gray-200 border-collapse">
          <thead className="bg-gray-800">
            <tr>
            <th className="px-3 py-2 border border-gray-300">Class</th>
            <th className="px-3 py-2 border border-gray-300">Level</th>
            <th className="px-3 py-2 border border-gray-300">HP</th>
            <th className="px-3 py-2 border border-gray-300">AC</th>
            <th className="px-3 py-2 border border-gray-300">Strength</th>
            <th className="px-3 py-2 border border-gray-300">Dexterity</th>
            <th className="px-3 py-2 border border-gray-300">Constitution</th>
            <th className="px-3 py-2 border border-gray-300">Intelligence</th>
            <th className="px-3 py-2 border border-gray-300">Wisdom</th>
            <th className="px-3 py-2 border border-gray-300">Charisma</th>
            </tr>
          </thead>
          <tbody>
            {party.map((member, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300">{member.class}</td>
                <td className="border border-gray-300">{member.level}</td>
                <td className="border border-gray-300">{member.hp}</td>
                <td className="border border-gray-300">{member.ac}</td>
                <td className="border border-gray-300">{member.strength}</td>
                <td className="border border-gray-300">{member.dexterity}</td>
                <td className="border border-gray-300">{member.constitution}</td>
                <td className="border border-gray-300">{member.intelligence}</td>
                <td className="border border-gray-300">{member.wisdom}</td>
                <td className="border border-gray-300">{member.charisma}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PartyStats;