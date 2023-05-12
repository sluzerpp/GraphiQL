import { useState } from 'react';
import './index.scss';

interface TabItem {
  element: React.ReactNode;
  name: string;
}

interface TabsProps {
  items: TabItem[];
}

export default function Tabs({ items }: TabsProps) {
  const [currentItem, setCurrentItem] = useState<TabItem>(items[0]);

  const createTabClickHander = (item: TabItem) => () => {
    setCurrentItem(item);
  };

  return (
    <div className="tabs">
      <div className="tabs__header">
        {items.map((item) => {
          const className = `tabs__tab ${currentItem.name === item.name ? 'active' : ''}`;
          return (
            <div key={item.name} onClick={createTabClickHander(item)} className={className}>
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="tabs__content">{currentItem.element}</div>
    </div>
  );
}
