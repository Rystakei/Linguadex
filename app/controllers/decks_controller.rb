class DecksController < ApplicationController
  # GET /people
  # GET /people.xml
  def index
    @decks = Deck.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @people }
    end
  end

  # GET /people/1
  # GET /people/1.xml
  def show
    @deck = Deck.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @deck }
    end
  end

  # GET /people/new
  # GET /people/new.xml
  def new
    @deck = Deck.new
    @deck.cards.build

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @deck }
    end
  end

  # GET /people/1/edit
  def edit
    @deck = Deck.find(params[:id])
  end

  # POST /people
  # POST /people.xml
  def create
    @deck = Deck.new(params[:deck])

    respond_to do |format|
      if @deck.save
        format.html { redirect_to( @deck, :notice => 'deck was successfully created.') }
        format.xml  { render :xml => @deck, :status => :created, :location => @deck }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @deck.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /people/1
  # PUT /people/1.xml
  def update
    @deck = Deck.find(params[:id])

    respond_to do |format|
      if @deck.update_attributes(params[:deck])
        format.html { redirect_to(@deck, :notice => 'deck was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @deck.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /people/1
  # DELETE /people/1.xml
  def destroy
    @deck = Deck.find(params[:id])
    @deck.destroy

    respond_to do |format|
      format.html { redirect_to(decks_url) }
      format.xml  { head :ok }
    end
  end
end
