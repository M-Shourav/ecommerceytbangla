interface Props {
  children: string;
}

const Title = ({ title }: Props) => {
  return <p className="text-xl font-semibold">{title}</p>;
};
export default Title;
