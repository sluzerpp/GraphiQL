import { memo, useState } from 'react';
import './index.scss';

interface TabItem {
  element: React.ReactNode;
  name: string;
}

interface TabsProps {
  items: TabItem[];
}

function Tabs({ items }: TabsProps) {
  const [currentItem, setCurrentItem] = useState<TabItem>(items[0]);

  const createTabClickHander = (item: TabItem) => () => {
    setIsVisible(true);
    setCurrentItem(item);
  };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`tabs ${!isVisible && 'tabs_none'}`}>
      <div className="tabs__header">
        <div className="tabs__nav">
          {items.map((item) => {
            const className = `tabs__tab  ${currentItem.name === item.name ? 'active' : ''}`;
            return (
              <div key={item.name} onClick={createTabClickHander(item)} className={className}>
                {item.name}
              </div>
            );
          })}
        </div>
        <button className="tabs__close" onClick={() => setIsVisible(!isVisible)}>
          {!isVisible ? '▲' : '▼'}
        </button>
      </div>
      {isVisible && <div className="tabs__content">{currentItem.element}</div>}
    </div>
  );
}

export default memo(Tabs);
