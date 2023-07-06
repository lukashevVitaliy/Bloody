import { React, lazy, Suspense, ErrorBoundary } from 'services/imports-npm';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// ===== static imports /start/ =====
import { Layout } from 'components/business/layout';
import { Spinner } from 'components/ui/spinner';
// ===== static imports /end/ =====

// ===== imports function loading data /start/ =====
import { sliderLoader } from 'pages/home-page/home-page';
import { miceLoader } from 'pages/mice-page/mice-page';
import { mouseLoader } from 'pages/mouse-page/mouse-page';
import { keyboardsLoader } from 'pages/keyboards-page/keyboards-page';
import { keyboardLoader } from 'pages/keyboard-page/keyboard-page';
import { headsetsLoader } from 'pages/headsets-page/headsets-page';
import { headsetLoader } from 'pages/headset-page/headset-page';
import { bluetoothsLoader } from 'pages/bluetooths-page/bluetooths-page';
import { bluetoothLoader } from 'pages/bluetooth-page/bluetooth-page';
import { accessoriesLoader } from 'pages/accessories-page/accessories-page';
import { accessoryLoader } from 'pages/accessory-page/accessory-page';
import { aboutLoader } from 'pages/about/about';
import { supportLoader } from 'pages/support/support';
import { pressCenterLoader } from 'pages/press-center/press-center';
import { pressCenterNewsLoader } from 'pages/press-center-news/press-center-news';
import { galleryLoader } from 'pages/gallery/gallery';
import { DownloadLoader } from 'pages/download/download';
// ===== lazy imports /start/ =====
const HomePage = lazy(() => import('pages/home-page/home-page'));
const MicePage = lazy(() => import('pages/mice-page/mice-page'));
const MousePage = lazy(() => import('pages/mouse-page/mouse-page'));
const KeyboardsPage = lazy(() => import('pages/keyboards-page/keyboards-page'));
const KeyboardPage = lazy(() => import('pages/keyboard-page/keyboard-page'));
const HeadsetsPage = lazy(() => import('pages/headsets-page/headsets-page'));
const HeadsetPage = lazy(() => import('pages/headset-page/headset-page'));
const BluetoothsPage = lazy(
  () => import('pages/bluetooths-page/bluetooths-page')
);
const BluetoothPage = lazy(() => import('pages/bluetooth-page/bluetooth-page'));
const AccessoriesPage = lazy(
  () => import('pages/accessories-page/accessories-page')
);
const AccessoryPage = lazy(() => import('pages/accessory-page/accessory-page'));
const About = lazy(() => import('pages/about/about'));
const Support = lazy(() => import('pages/support/support'));
const PressCenter = lazy(() => import('pages/press-center/press-center'));
const PressCenterNews = lazy(
  () => import('pages/press-center-news/press-center-news')
);
const Gallery = lazy(() => import('pages/gallery/gallery'));
const Download = lazy(() => import('pages/download/download'));
const Shop = lazy(() => import('pages/shop/shop'));
// ===== add imports lazy =====
const NotFoundPage = lazy(() => import('pages/not-found-page/not-found-page'));
const ErrorPage = lazy(() => import('pages/error-page/error-page'));
// ===== lazy imports /end/ =====

import { ErrorFallback } from '../error-fallback';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route
        index
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
          </ErrorBoundary>
        }
        loader={sliderLoader}
      />
      <Route
        path="mice"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <MicePage />
            </Suspense>
          </ErrorBoundary>
        }
        loader={miceLoader}
      />
      <Route
        path="mice/:id"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <MousePage />
            </Suspense>
          </ErrorBoundary>
        }
        loader={mouseLoader}
      />
      <Route
        path="keyboards"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <KeyboardsPage />
            </Suspense>
          </ErrorBoundary>
        }
        loader={keyboardsLoader}
      />
      <Route
        path="keyboards/:id"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <KeyboardPage />
            </Suspense>
          </ErrorBoundary>
        }
        loader={keyboardLoader}
      />
      <Route
        path="headsets"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <HeadsetsPage />
            </Suspense>
          </ErrorBoundary>
        }
        loader={headsetsLoader}
      />
      <Route
        path="headsets/:id"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <HeadsetPage />
            </Suspense>
          </ErrorBoundary>
        }
        loader={headsetLoader}
      />
      <Route
        path="bluetooth"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <BluetoothsPage />
            </Suspense>
          </ErrorBoundary>
        }
        loader={bluetoothsLoader}
      />
      <Route
        path="bluetooth/:id"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <BluetoothPage />
            </Suspense>
          </ErrorBoundary>
        }
        loader={bluetoothLoader}
      />
      <Route
        path="accessories"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <AccessoriesPage />
            </Suspense>
          </ErrorBoundary>
        }
        loader={accessoriesLoader}
      />
      <Route
        path="accessories/:id"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <AccessoryPage />
            </Suspense>
          </ErrorBoundary>
        }
        loader={accessoryLoader}
      />
      <Route
        path="about"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <About />
            </Suspense>
          </ErrorBoundary>
        }
        loader={aboutLoader}
      />
      <Route
        path="support"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <Support />
            </Suspense>
          </ErrorBoundary>
        }
        loader={supportLoader}
      />
      <Route
        path="press-center"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <PressCenter />
            </Suspense>
          </ErrorBoundary>
        }
        loader={pressCenterLoader}
      />
      <Route
        path="press-center/:id"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <PressCenterNews />
            </Suspense>
          </ErrorBoundary>
        }
        loader={pressCenterNewsLoader}
      />
      <Route
        path="gallery"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <Gallery />
            </Suspense>
          </ErrorBoundary>
        }
        loader={galleryLoader}
      />
      <Route
        path="download"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <Download />
            </Suspense>
          </ErrorBoundary>
        }
        loader={DownloadLoader}
      />
      <Route
        path="shop"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Spinner />}>
              <Shop />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
