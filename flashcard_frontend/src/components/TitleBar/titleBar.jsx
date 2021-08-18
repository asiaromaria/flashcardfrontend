import React from 'react';
import './titleBar.css';

const titleBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="app.js">Asia's Flashcards!</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="app.js">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="app.js">Flashcards</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="app.js">Create a New Deck of Cards </a>
              </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="search" />
                    <button class="butn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  };


export default titleBar;