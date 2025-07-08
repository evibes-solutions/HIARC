import Image from 'next/image';

type Props = {
  title: string;
  tag: string;
  image: string;
};

export default function PortfolioCard({ title, tag, image }: Props) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      <Image src={image} alt={title} width={400} height={300} className="w-full h-64 object-cover" />
      <div className="p-4 text-center">
        <span className="text-xs uppercase font-semibold text-[#1A3C36] border border-[#1A3C36] px-2 py-1 rounded">
          {tag}
        </span>
        <h3 className="mt-2 text-xl font-bold text-[#1A3C36]">{title}</h3>
      </div>
    </div>
  );
}
