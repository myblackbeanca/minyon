import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { EventDashboard } from './components/journeys/EventDashboard';
import { MusicLaunchDashboard } from './components/journeys/MusicLaunchDashboard';
import { MerchDashboard } from './components/journeys/MerchDashboard';
import { FundraiserDashboard } from './components/journeys/FundraiserDashboard';
import { VirtualEventDashboard } from './components/journeys/VirtualEventDashboard';
import { FestivalTicketsDashboard } from './components/journeys/FestivalTicketsDashboard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Helmet>
                  <title>MINY Dashboard - Overview</title>
                  <meta name="description" content="Get a comprehensive overview of your fan engagement, MINYON activity, and performance metrics." />
                </Helmet>
                <Dashboard />
              </>
            } 
          />
          <Route 
            path="/events" 
            element={
              <>
                <Helmet>
                  <title>MINY Events - Exclusive Fan Experiences</title>
                  <meta name="description" content="Manage and track your exclusive MINY holder events, RSVPs, and fan engagement." />
                </Helmet>
                <EventDashboard />
              </>
            } 
          />
          <Route 
            path="/music" 
            element={
              <>
                <Helmet>
                  <title>MINY Music Teasers - Unreleased Content</title>
                  <meta name="description" content="Track engagement with unreleased music teasers and fan reactions." />
                </Helmet>
                <MusicLaunchDashboard />
              </>
            } 
          />
          <Route 
            path="/merch" 
            element={
              <>
                <Helmet>
                  <title>MINY Merch - Exclusive Collections</title>
                  <meta name="description" content="Manage your exclusive merchandise offerings and track MINYON purchases." />
                </Helmet>
                <MerchDashboard />
              </>
            } 
          />
          <Route 
            path="/cause" 
            element={
              <>
                <Helmet>
                  <title>MINY Causes - Support Music Education</title>
                  <meta name="description" content="Track fundraising progress and donor engagement for music education initiatives." />
                </Helmet>
                <FundraiserDashboard />
              </>
            } 
          />
          <Route 
            path="/virtual" 
            element={
              <>
                <Helmet>
                  <title>MINY Virtual Events - Digital Meet & Greets</title>
                  <meta name="description" content="Manage virtual fan meet & greets and track digital event engagement." />
                </Helmet>
                <VirtualEventDashboard />
              </>
            } 
          />
          <Route 
            path="/tickets" 
            element={
              <>
                <Helmet>
                  <title>MINY Festival Tickets - Exclusive Access</title>
                  <meta name="description" content="Track festival ticket sales and exclusive MINYON holder offers." />
                </Helmet>
                <FestivalTicketsDashboard />
              </>
            } 
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;