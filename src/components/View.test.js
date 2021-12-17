import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';


test("renders zero articles without errors", async () => {
    render(<View articles={[]}/>)
    const articles = screen.queryAllByTestId('article');
    expect(articles).toHaveLength(0);
});

test("renders three articles without errors", async ()=> {
    render(<View articles={
        {headline:'test1',
        author:'test1',
        summary:'test1',
        body:'test1'},
        {headline:'test1',
        author:'test1',
        summary:'test1',
        body:'test1'},
        {headline:'test1',
        author:'test1',
        summary:'test1',
        body:'test1'}
    } />)
    const articles = screen.queryAllByTestId('article');
    expect(articles).toHaveLength(0);
})

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.