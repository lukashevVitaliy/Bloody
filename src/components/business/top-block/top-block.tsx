import { FC } from 'react';
import { React, memo } from 'services/imports-npm';

import { SearchPanel } from 'components/ui/search-panel/search-panel';
import { ITopBlock } from 'types/components-types';

const TopBlock: FC<ITopBlock> = memo(
  ({ title, classes, statusSearch, setSearchParams, productQuery }) => {
    return (
      <div className={classes}>
        <h1>{title}</h1>
        {statusSearch && (
          <SearchPanel
            setSearchParams={setSearchParams}
            productQuery={productQuery}
          />
        )}
      </div>
    );
  }
);

export default TopBlock;
