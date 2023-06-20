'use client';

import React, {
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
  forwardRef,
  Suspense,
  Component,
  lazy,
} from 'react';

import {
  Link,
  NavLink,
  useParams,
  Outlet,
  RouterProvider,
  useLoaderData,
  useSearchParams,
  defer,
  Await,
  useRouteError,
  isRouteErrorResponse,
  useLocation,
} from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { OverlayScrollbars } from 'overlayscrollbars';

import { toast, ToastContainer } from 'react-toastify';

import { ErrorBoundary } from 'react-error-boundary';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import ReactMarkdown from 'react-markdown';

import LazyLoad from 'react-lazyload';

export {
  React,
  Component,
  lazy,
  Suspense,
  memo,
  useCallback,
  useMemo,
  forwardRef,
  useRef,
  useState,
  useEffect,
  Link,
  NavLink,
  Outlet,
  Swiper,
  SwiperSlide,
  Autoplay,
  Pagination,
  OverlayScrollbars,
  useParams,
  RouterProvider,
  useLoaderData,
  useSearchParams,
  defer,
  Await,
  useRouteError,
  ReactMarkdown,
  isRouteErrorResponse,
  useLocation,
  ErrorBoundary,
  useForm,
  toast,
  ToastContainer,
  LazyLoad,
};
