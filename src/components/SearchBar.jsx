import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';
import { GoLink, GoCopy, GoX } from 'react-icons/go';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(null); // Track the copied URL

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  
    if (!inputValue.trim()) {
      // Show an error toast if the input field is empty
      toast.error('Please enter a valid URL');
      return;
    }
  
    if (!urlRegex.test(inputValue)) {
      // Show an error toast if the input value is not a valid URL
      toast.warning('Invalid URL format. Please enter a valid URL');
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(inputValue)}`);
      const shortened = response.data.result.short_link;
      setShortenedUrls([...shortenedUrls, shortened]);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle status code 400 (Bad Request) error and show a toast
        toast.warning('Invalid URL. Please check the URL and try again.');
      } else {
        // Handle other errors as needed
      }
    } finally {
      setLoading(false);
    }
  };
  

  const handleCopy = (shortenedUrl) => {
    // Copy the shortened URL to the clipboard
    navigator.clipboard.writeText(shortenedUrl).then(() => {
      setCopiedUrl(shortenedUrl); // Update the copied URL state
      setTimeout(() => {
        setCopiedUrl(null); // Reset copied URL state after 1 second
      }, 1000);
    });
  };

  const handleClear = () => {
    setInputValue('');
    setShortenedUrls([]);
  };

  return (
    <div className="   py-10  flex flex-col justify-center">
      <div className="relative p-4 sm:p-12 w-full sm:max-w-2xl sm:mx-auto">
        <div className="text-center mb-5">
          <h1 className="text-4xl font-bold bg-cus">Shorten Your Loooong Links :)</h1>
          <p className="mt-5 dark:text-white">
            Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.
          </p>
        </div>
        <div className="overflow-hidden z-0 rounded-full relative p-3">
          <form role="form" className="relative flex z-50 bg-white dark:text-white rounded-full" onSubmit={handleSubmit}>
            <GoLink className="absolute top-5 left-3 dark:text-black" />
            <input
              type="text"
              placeholder="Enter the link here"
              className="rounded-full flex-1 px-8 py-4 text-gray-700 focus:outline-none"
              value={inputValue}
              onChange={handleChange}
            />
            {inputValue && (
              <button
                type="button"
                className="absolute bottom-5 right-[180px] text-lg font-bold dark:text-black"
                onClick={handleClear}
                style={{ background: 'none', border: 'none', cursor: 'pointer' } }
              >
                <GoX className='pt-1 ' />
              </button>
            )}
            <button
              type="submit"
              className="bg-indigo-500 text-white dark:text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
              disabled={loading}
            >
              {loading ? 'Shortening...' : 'Shorten Now!'}
            </button>
          </form>
          
          <div className="glow glow-1 z-10 bg-blue-400 absolute"></div>
          <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
          <div className="glow glow-3 z-30 bg-blue-500 absolute"></div>
          <div className="glow glow-4 z-40 bg-pink-500 absolute"></div>
          
        </div>

        <p className='text-center mt-2 text-lg font-medium mb-4 bg-cus'>click  Again for more related Shorten URL</p>
        {shortenedUrls.length > 0 && (
          <div className=" w-full">
            <p className="font-semibold  dark:text-white">Shortened URLs:</p>
            <ul>
              {shortenedUrls.map((url, index) => (
                <li key={index} className="flex items-center">
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 flex-1">
                    {url}
                  </a>
                  <CopyToClipboard text={url} onCopy={() => handleCopy(url)}>
                    <div className="cursor-pointer p-3 relative">
                      <p className={`text-green-500 absolute top-3 -left-14 text-sm mr-2 ${copiedUrl === url ? 'visible' : 'invisible'}`}>
                        Copied!
                      </p>
                      <GoCopy className="text-green-500 text-2xl" />
                    </div>
                  </CopyToClipboard>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
}

export default SearchBar;
