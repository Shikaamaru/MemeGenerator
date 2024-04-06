import Image from 'next/image';

export default function MemeImage({ url }) {
  return (
    <div>
      <Image src={url} width={200} height={200} />
    </div>
  );
}