
export default function PageTitle({ title, subTitle }: any) {
  return (
    <>
      <div className="mb-4">
        <h1 className="text-sm md:text-2xl font-semibold">{title}</h1>
        <p className="mb-0">{subTitle}</p>
      </div>
    </>
  );
}
