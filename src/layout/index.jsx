import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div className='grid grid-cols-3 gap-4 p-6 lg:px-20'>{children}</div>
  );
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Layout;