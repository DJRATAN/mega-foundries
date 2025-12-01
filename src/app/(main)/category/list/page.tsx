 
import React from 'react';
import CategoryList from '../page';
 
export const metadata = {
  title: 'All Categories | Mega Foundries',
  description: 'Browse our complete catalog of industrial categories.',
};

export default function CategoryListPage() {
  return (
    <main>
      <CategoryList />
    </main>
  );
}