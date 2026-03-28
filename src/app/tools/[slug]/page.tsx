type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  return <main>{slug}</main>;
}
