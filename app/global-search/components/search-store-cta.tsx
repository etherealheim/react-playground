import { IconArrowRight, IconShoppingBag } from "@tabler/icons-react";
import Image from "next/image";

interface SearchStoreCtaProps {
  // Props if any
}

export function SearchStoreCta({}: SearchStoreCtaProps) {
  return (
    <div className="p-2">
      <div className="m-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600">
        <div className="px-2 pt-2 pb-1">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Explore from Store
          </p>
        </div>
        <div className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
          <div className="flex items-center gap-2">
            <IconShoppingBag className="size-4 text-gray-800 dark:text-gray-200" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Try
            </span>
            <Image
              src="/website-content-crawler.png"
              alt="Website Content Crawler"
              width={20}
              height={20}
              className="rounded border border-gray-300 dark:border-gray-600"
            />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Website Content Crawler
            </span>
          </div>
          <div className="pl-6 mt-1">
            <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
              apify/website-content-crawler
            </p>
          </div>
        </div>
        <div className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
          <div className="flex items-center gap-2">
            <IconShoppingBag className="size-4 text-gray-800 dark:text-gray-200" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Try
            </span>
            <Image
              src="/globe.svg"
              alt="Website Screenshot Generator"
              width={20}
              height={20}
              className="rounded border border-gray-300 dark:border-gray-600"
            />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Website Screenshot Generator
            </span>
          </div>
          <div className="pl-6 mt-1">
            <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
              apify/screenshot-url
            </p>
          </div>
        </div>
        <div className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
          <div className="flex items-center gap-2">
            <IconShoppingBag className="size-4 text-gray-800 dark:text-gray-200" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Try
            </span>
            <Image
              src="/window.svg"
              alt="Website Changes Detector"
              width={20}
              height={20}
              className="rounded border border-gray-300 dark:border-gray-600"
            />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Website Changes Detector
            </span>
          </div>
          <div className="pl-6 mt-1">
            <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
              tri_angle/website-changes-detector
            </p>
          </div>
        </div>
        <div className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
          <div className="flex items-center gap-2">
            <IconArrowRight className="size-4 text-gray-800 dark:text-gray-200" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Explore in Apify Store
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 