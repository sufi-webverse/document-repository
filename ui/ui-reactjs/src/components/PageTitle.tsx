export default function PageTitle({ title, subTitle, children }: any) {
  return (
    <>
      <div className="mb-4">
        <span className="flex items-center">
          <h1 className="text-sm md:text-2xl font-semibold">{title}</h1>
          {children}
        </span>
        <p className="mb-0">{subTitle}</p>
      </div>
    </>
  );
}
