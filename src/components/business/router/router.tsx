import { React, lazy } from 'services/imports-npm';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// import { HomePage, sliderLoader } from 'pages/home-page';
// import { miceLoader, MicePage } from 'pages/mice-page';
// import { mouseLoader, MousePage } from 'pages/mouse-page';
// import { keyboardsLoader, KeyboardsPage } from 'pages/keyboards-page';
// import { keyboardLoader, KeyboardPage } from 'pages/keyboard-page';
// import { headsetsLoader, HeadsetsPage } from 'pages/headsets-page';
// import { headsetLoader, HeadsetPage } from 'pages/headset-page';
// import { bluetoothsLoader, BluetoothsPage } from 'pages/bluetooths-page';
// import { bluetoothLoader, BluetoothPage } from 'pages/bluetooth-page';
// import { accessoriesLoader, AccessoriesPage } from 'pages/accessories-page';
// import { accessoryLoader, AccessoryPage } from 'pages/accessory-page';
// import { About, aboutLoader } from 'pages/about';
// import { Support, supportLoader } from 'pages/support';
// import { PressCenter, pressCenterLoader } from 'pages/press-center';
// import {
//   PressCenterNews,
//   pressCenterNewsLoader,
// } from 'pages/press-center-news';
// import { Gallery, galleryLoader } from 'pages/gallery';
// import { Download, DownloadLoader } from 'pages/download';
// import { Shop } from 'pages/shop';

// ===== static imports /start/ =====
import { Layout } from 'components/business/layout';
import { NotFoundPage } from 'pages/not-found-page/not-found-page';
import { ErrorPage } from 'pages/error-page/error-page';
import { ErrorBoundary } from 'react-error-boundary';
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
// ===== imports function loading data /end/ =====

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
// ===== lazy imports /end/ =====

// ===== imports components  =====
import { ErrorFallback } from '../error-fallback';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route
        index
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <HomePage />
          </ErrorBoundary>
        }
        loader={sliderLoader}
      />
      <Route
        path="mice"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <MicePage />
          </ErrorBoundary>
        }
        loader={miceLoader}
      />
      <Route
        path="mice/:id"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <MousePage />
          </ErrorBoundary>
        }
        loader={mouseLoader}
      />
      <Route
        path="keyboards"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <KeyboardsPage />
          </ErrorBoundary>
        }
        loader={keyboardsLoader}
      />
      <Route
        path="keyboards/:id"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <KeyboardPage />
          </ErrorBoundary>
        }
        loader={keyboardLoader}
      />
      <Route
        path="headsets"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <HeadsetsPage />
          </ErrorBoundary>
        }
        loader={headsetsLoader}
      />
      <Route
        path="headsets/:id"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <HeadsetPage />
          </ErrorBoundary>
        }
        loader={headsetLoader}
      />
      <Route
        path="bluetooth"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <BluetoothsPage />
          </ErrorBoundary>
        }
        loader={bluetoothsLoader}
      />
      <Route
        path="bluetooth/:id"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <BluetoothPage />
          </ErrorBoundary>
        }
        loader={bluetoothLoader}
      />
      <Route
        path="accessories"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AccessoriesPage />
          </ErrorBoundary>
        }
        loader={accessoriesLoader}
      />
      <Route
        path="accessories/:id"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AccessoryPage />
          </ErrorBoundary>
        }
        loader={accessoryLoader}
      />
      <Route
        path="about"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <About />
          </ErrorBoundary>
        }
        loader={aboutLoader}
      />
      <Route
        path="support"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Support />
          </ErrorBoundary>
        }
        loader={supportLoader}
      />
      <Route
        path="press-center"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <PressCenter />
          </ErrorBoundary>
        }
        loader={pressCenterLoader}
      />
      <Route
        path="press-center/:id"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <PressCenterNews />
          </ErrorBoundary>
        }
        loader={pressCenterNewsLoader}
      />
      <Route
        path="gallery"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Gallery />
          </ErrorBoundary>
        }
        loader={galleryLoader}
      />
      <Route
        path="download"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Download />
          </ErrorBoundary>
        }
        loader={DownloadLoader}
      />
      <Route
        path="shop"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Shop />
          </ErrorBoundary>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
