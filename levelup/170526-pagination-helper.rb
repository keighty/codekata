# ./levelup/170526-pagination-helper.rb

# TODO: complete this class

class PaginationHelper
  attr_accessor :collection, :page_size

  # The constructor takes in an array of items and a integer indicating how many
  # items fit within a single page
  def initialize(collection, items_per_page)
    @collection = collection
    @page_size = items_per_page
  end

  # returns the number of items within the entire collection
  def item_count
    collection.length
  end

  # returns the number of pages
  def page_count
    if collection.length < page_size
      1
    else
      (collection.length / page_size) + 1
    end
  end

  # returns the number of items on the current page. page_index is zero based.
  # this method should return -1 for page_index values that are out of range
  def page_item_count(page_index)
    if (page_index + 1 < page_count)
      page_size
    elsif page_index + 1 > page_count
      -1
    else
      item_count % page_size
    end
  end

  # determines what page an item is on. Zero based indexes.
  # this method should return -1 for item_index values that are out of range
  def page_index(item_index)
    if (item_index >= item_count || item_index < 0)
      -1
    elsif item_count == item_index - 1
      page_count - 1
    else
      (item_index / page_size)
    end
  end
end

class AssertionError < RuntimeError
end
def assert &block
  raise AssertionError unless yield
end

helper = PaginationHelper.new(['a','b','c','d','e','f'], 4)
assert { helper.page_count == 2 }
assert { helper.item_count == 6 }
assert { helper.page_item_count(0) == 4 }
assert { helper.page_item_count(1) == 2 }
assert { helper.page_item_count(2) == -1 }
assert { helper.page_index(5) == 1 }

assert { helper.page_index(2) == 0 }
assert { helper.page_index(20) == -1 }
assert { helper.page_index(-10) == -1 }

helper = PaginationHelper.new([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 2)
assert { helper.page_count == 13 }
# assert { helper.page_index(23) == 11}
# # page_ndex takes an item index and returns the page that it belongs on
# helper.page_index(5) # should == 1 (zero based index)
# helper.page_index(2) # should == 0
# helper.page_index(20) # should == -1
# helper.page_index(-10) # should == -1 because negative indexes are invalid
