
'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Define types for the image object
interface GalleryImage {
    id: number;
    src: string;
    title: string;
    description: string;
    category: string[];
}

// Define props for the Modal component
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: GalleryImage | null;
}

// Modal Component
const ImageModal = ({ isOpen, onClose, image }: ModalProps) => {
    if (!isOpen || !image) return null;

        return (
            <div
                className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <div
                    className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                            aria-label="Close modal"
                        >
                            <svg
                                className="h-6 w-6 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <div className="max-h-[70vh] overflow-hidden">
                            <Image
                                src={image.src}
                                alt={image.title}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        <div className="p-6">
                            <h2 className="text-2xl body text-neutral-800 mb-2">{image.title}</h2>
                            <p className="text-gray-600 body mb-4">{image.description}</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="bg-indigo-100 body-light text-indigo-800 px-2 py-1 rounded-md">
                                    {image.category.includes('category1') ? 'Web Design' :
                                        image.category.includes('category2') ? 'Mobile UI' : 'Branding'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const DesignGallery = () => {
        const [selectedCategory, setSelectedCategory] = useState('all');
        const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const [selectedImage, setSelectedImage] = useState(null);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
        const dropdownRef = useRef<HTMLDivElement>(null);

        const imageData = [
            {
                id: 1,
                src: "/about/slider/1.png",
                title: "Ziel Clothing",
                description: "Clothing brand landing page.",
                category: ["all", "category1", "category3"],
            },
            {
                id: 2,
                src: "/about/slider/2.png",
                title: "Ziel Clothing",
                description: "Clothing brand landing page.",
                category: ["all", "category1", "category3"],
            },
            {
                id: 3,
                src: "/about/slider/3.png",
                title: "Academiku",
                description: "Education mobile app for more interactivity.",
                category: ["all", "category2"],
            },
            {
                id: 4,
                src: "/about/slider/4.png",
                title: "Ziel Clothing",
                description: "Clothing brand landing page.",
                category: ["all", "category1", "category3"],
            },
            {
                id: 5,
                src: "/about/slider/5.png",
                title: "Jiwakita",
                description: "Fulfill your mental needs with all-encompassing features in Jiwakita.",
                category: ["all", "category2"],
            },
            {
                id: 6,
                src: "/about/slider/6.png",
                title: "Reality Club",
                description: "Exploration in band web design.",
                category: ["all", "category1", "category3"],
            },
            {
                id: 7,
                src: "/about/slider/7.png",
                title: "StackBase",
                description: "System landing page for tech industries.",
                category: ["all", "category1", "category3"],
            },
            {
                id: 8,
                src: "/about/slider/8.png",
                title: "Torifto",
                description: "Thrift better in Torifto, more categories, more options.",
                category: ["all", "category2"],
            },
        ];

        const categories = [
            { id: "all", name: "All Designs" },
            { id: "category1", name: "Web Design" },
            { id: "category2", name: "Mobile UI" },
            { id: "category3", name: "Branding" },
        ];

        // Close dropdown when clicking outside
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setIsDropdownOpen(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);

        useEffect(() => {
            // Initialize the ref array
            tabsRef.current = tabsRef.current.slice(0, categories.length);

            // Set initial underline position
            const activeTabIndex = categories.findIndex(cat => cat.id === selectedCategory);
            if (tabsRef.current[activeTabIndex]) {
                const tab = tabsRef.current[activeTabIndex];
                setUnderlineStyle({
                    width: tab.offsetWidth,
                    left: tab.offsetLeft
                });
            }
        }, [selectedCategory]);

        const handleCategoryClick = (categoryId: string, index: number) => {
            setSelectedCategory(categoryId);

            // Animate the underline
            if (tabsRef.current[index]) {
                const tab = tabsRef.current[index];
                setUnderlineStyle({
                    width: tab.offsetWidth,
                    left: tab.offsetLeft
                });
            }
        };

        const handleDropdownSelect = (categoryId: string) => {
            setSelectedCategory(categoryId);
            setIsDropdownOpen(false);
        };

        const handleViewDetails = (image: any) => {
            setSelectedImage(image);
            setIsModalOpen(true);
        };

        const closeModal = () => {
            setIsModalOpen(false);
            setSelectedImage(null);
        };

        const filteredImages =
            selectedCategory === "all"
                ? imageData
                : imageData.filter((image) =>
                    image.category.includes(selectedCategory)
                );

        const selectedCategoryName = categories.find(cat => cat.id === selectedCategory)?.name || 'All Designs';

        return (
            <div className="pt-24 sm:pt-28 lg:py-28 z-10 px-4 md:px-10 xl:px-14">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl body-bold tracking-tigher text-transparent bg-clip-text bg-gradient-to-b from-violet-800 via-violet-700 to-violet-500 mb-2 sm:mb-4">
                        Designs and Exploration
                    </h1>
                    <p className="body text-neutral-900 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto">
                        Explore my creative work in various design disciplines. Filter by
                        category to see specific projects.
                    </p>
                </header>

                {/* Mobile Dropdown (visible only on small screens) */}
                <div className="sm:hidden flex justify-center mb-8" ref={dropdownRef}>
                    <div className="relative w-full max-w-xs">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center justify-between w-full px-4 py-3 text-sm rounded-md bg-indigo-600 body text-neutral-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <span>{selectedCategoryName}</span>
                            <svg
                                className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute z-50 w-full mt-1 bg-indigo-600 text-neutral-100 body rounded-md shadow-lg overflow-hidden">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleDropdownSelect(category.id)}
                                        className={`body block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${selectedCategory === category.id ? 'bg-indigo-50 text-indigo-700' : 'text-neutral-100'}`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Category Filters with Sliding Indicator (hidden on small screens) */}
                <div className="hidden sm:flex justify-center mb-12 relative">
                    <div className="flex bg-white rounded-full p-1 border border-indigo-200 relative">
                        {categories.map((category, index) => (
                            <button
                                key={category.id}
                                ref={el => { tabsRef.current[index] = el; }}
                                onClick={() => handleCategoryClick(category.id, index)}
                                className={`px-6 py-2 rounded-full body transition-all duration-300 relative z-10 ${selectedCategory === category.id
                                    ? "text-white"
                                    : "text-indigo-700 hover:text-indigo-900"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                        {/* Sliding indicator */}
                        <div
                            className="absolute top-1 h-10 bg-indigo-600 rounded-full transition-all duration-300 ease-out"
                            style={{
                                width: `${underlineStyle.width}px`,
                                left: `${underlineStyle.left}px`
                            }}
                        />
                    </div>
                </div>

                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                    {filteredImages.map((image) => (
                        <div key={image.id} className="break-inside-avoid mb-6 group">
                            <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl">
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />

                                {/* Image Info Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                                    <div className="p-4 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h3 className="body text-lg">{image.title}</h3>
                                        <p className="text-sm body-light">{image.description}</p>
                                        <button
                                            className="mt-2 px-4 py-1 bg-indigo-600 text-neutral-100 body text-sm rounded-full hover:bg-indigo-500 transition-colors"
                                            onClick={() => handleViewDetails(image)}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🎨</div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            No designs found
                        </h3>
                        <p className="text-gray-500">Try selecting a different category</p>
                    </div>
                )}

                {/* Image Modal */}
                <ImageModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    image={selectedImage}
                />
            </div>
        );
    };

    export default DesignGallery;