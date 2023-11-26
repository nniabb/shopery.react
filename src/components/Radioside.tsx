import React, { useEffect, useState } from 'react';
import { Filterbutton, Btntext, H2, Form, H4 } from './styled/Radiostyled';
import Filterimg from '../images/filterlogo.svg';

const CategoriesList: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryCounts, setCategoryCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategoryCounts = async () => {
      try {
        const counts: { [key: string]: number } = {};

        await Promise.all(
          categories.map(async (category) => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const data = await response.json();
            counts[category] = data.length;
          })
        );

        setCategoryCounts(counts);
      } catch (error) {
        console.error('Error fetching category counts:', error);
      }
    };

    if (!selectedCategory) {
      fetchCategoryCounts();
    } else {
      fetchCategoryCounts();
    }
  }, [categories, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Filterbutton>
        <Btntext>Filter</Btntext>
        <img src={Filterimg}></img>
      </Filterbutton>
      <H2>All Categories</H2>
      <Form>
        {categories.map((category, index) => (
          <div key={index} style={{display: 'flex', gap: '5px'}}>
            <input
              type="radio"
              id={category}
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => handleCategoryChange(category)}
              style={{cursor:'pointer'}}
            />
            <H4>
              {category} ({categoryCounts[category] || 0})
            </H4>
          </div>
        ))}
      </Form>
    </div>
  );
};


export default CategoriesList;

