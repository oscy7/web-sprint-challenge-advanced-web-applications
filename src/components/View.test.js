import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import Article from './Article';

test("renders zero articles without errors", async () => {
    render(<View articles={[]} />)

    const articles = screen.queryAllBy(<Article/>)
    expect(articles).not.toBeInTheDocument();

});

 test("renders three articles without errors", async ()=> {
     render(<View/>)

     const articles = screen.queryAllBy(<Article articles={[
         {article_id:1, article_name: 'name1'},
         {article_id:2, article_name: 'name2'},
         {article_id:3, article_name: 'name3'}
     ]}/>)
     expect(articles).toHaveLength(3)
     
 });

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.