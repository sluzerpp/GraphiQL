type PrevButtonProps = {
  name: string;
  callback: () => void;
};

export default function PrevButton({ name, callback }: PrevButtonProps) {
  return (
    <button onClick={callback} className="docs__prev">
      {`<-`} {name}
    </button>
  );
}
