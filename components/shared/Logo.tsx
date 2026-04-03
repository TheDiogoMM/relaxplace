import Image from 'next/image'

export default function Logo({ height = 44 }: { height?: number }) {
  const width = Math.round(height * 3.5)
  return (
    <Image
      src="/logorelax.png"
      alt="Logo Relax Place"
      width={width}
      height={height}
      style={{ objectFit: 'contain', height: `${height}px`, width: 'auto' }}
      priority
    />
  )
}
