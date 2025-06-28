export default function Card({ title, value, color }: { title: string; value: string; color: 'bg-[#098A46]' | 'bg-[#7AC043]' | 'bg-[#FFB706]' }) {
  return (
    <div className={`${color} text-white p-6 rounded-xl shadow`}>
      <p className="text-sm">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}
