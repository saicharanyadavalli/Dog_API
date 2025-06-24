document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const refreshBtn = document.getElementById('refresh-btn');
    const btnText = refreshBtn.querySelector('.btn-text');
    const spinner = refreshBtn.querySelector('.spinner');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const breedsList = document.getElementById('breeds-list');

    const API_BASE = 'https://dog.ceo/api';

    function setLoading(isLoading) {
        if (isLoading) {
            refreshBtn.disabled = true;
            spinner.style.display = 'inline-block';
            btnText.style.opacity = '0.5';
        } else {
            refreshBtn.disabled = false;
            spinner.style.display = 'none';
            btnText.style.opacity = '1';
        }
    }

    const displayImages = (imageUrls) => {
        gallery.innerHTML = '';
        if (!imageUrls || imageUrls.length === 0) {
            gallery.innerHTML = '<p>No images found. Try a different search!</p>';
            setLoading(false);
            return;
        }
        let loaded = 0;
        gallery.classList.remove('fade-in');
        imageUrls.forEach(url => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            const img = document.createElement('img');
            img.src = url;
            img.alt = 'A cute dog';
            img.onload = img.onerror = () => {
                loaded++;
                if (loaded === imageUrls.length) {
                    setLoading(false);
                    gallery.classList.add('fade-in');
                }
            };
            galleryItem.appendChild(img);
            gallery.appendChild(galleryItem);
        });
    };

    const fetchAndDisplay = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.status === 'success') {
                displayImages(data.message);
            } else {
                displayImages([]);
                console.error('API Error:', data.message);
            }
        } catch (error) {
            displayImages([]);
            console.error('Fetch Error:', error);
        }
    };

    const fetchRandomImages = () => {
        fetchAndDisplay(`${API_BASE}/breeds/image/random/6`);
    };

    const fetchBreedImages = (breed) => {
        fetchAndDisplay(`${API_BASE}/breed/${breed}/images/random/6`);
    }

    const fetchAllBreeds = async () => {
        try {
            const response = await fetch(`${API_BASE}/breeds/list/all`);
            const data = await response.json();
            if (data.status === 'success') {
                const breeds = Object.keys(data.message);
                breedsList.innerHTML = breeds.map(breed => `<option value="${breed}"></option>`).join('');
            }
        } catch (error) {
            console.error('Could not fetch breed list:', error);
        }
    };

    refreshBtn.addEventListener('click', fetchRandomImages);

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const breed = searchInput.value.trim().toLowerCase();
        if (breed) {
            fetchBreedImages(breed);
        } else {
            fetchRandomImages();
        }
    });

    // Initial Load
    fetchRandomImages();
    fetchAllBreeds();

    // Fade-in animation for gallery
    gallery.classList.add('fade-in');
});
